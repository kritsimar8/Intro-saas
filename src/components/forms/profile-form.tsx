'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { EditUserProfileSchema } from "@/lib/types"
import { Input } from "../ui/input"
import { Form,FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"





type Props ={} 

const ProfileForm =(props:Props)=>{
    const [isLoading,setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode:'onChange',
        resolver:zodResolver(EditUserProfileSchema),
        defaultValues:{
            name:'',
            email:'',
        },
    })



    return (
        <Form {...form}>
            <form className="flex flex-col gap-6" onSubmit={()=>{}}>
                <FormField disabled={isLoading} control={form.control} name="name" render={({field})=>(
                    <FormItem>
                        <FormLabel className="text-lg">User full name</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="Name"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} />
                <FormField disabled={isLoading} control={form.control} name="name" render={({field})=>(
                    <FormItem>
                        <FormLabel className="text-lg">Email</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="Email"
                                {...field}
                                disabled
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )} />
                <Button type="submit" className="self-start  hover:bg-black-500 hover:text-white ">
                    {isLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Saving </>):('Save User Settings')}
                </Button>
            </form>
        </Form>
    )
}

export default ProfileForm