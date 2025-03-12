"use client"
import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { CloudUpload, WandSparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const ImageUpload = () => { 
    const AiModelList=[
        {
            name: "Gemini Google",
            icon:'/Google_Gemini_logo.svg.png'
        },
        {
            name: "llama by meta",
            icon:'/meta.png'
        },
        {
            name: "DeepSeek",
            icon:'/deepseek-color.svg'
        },

    ]
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const onImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files;
        if (file && file.length > 0) {
            console.log(file)       
            const imageUrl = URL.createObjectURL(file[0])
            setPreviewUrl(imageUrl)
        }
    }

    return (
        <div className='mt-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-10">
                {!previewUrl ? (
                    <div className='p-7 border border-dashed rounded-md shadow-md flex flex-col items-center justify-center'>
                        <CloudUpload className='h-20 w-20 mx-auto text-gray-400' />
                        <h2 className='font-bold text-lg'>Upload Image</h2>
                        <p className="text-gray-400 mt-3">Click Button to Select Wireframe Image</p>
                        <div className='p-5 border border-dashed rounded-md mt-7 w-full flex justify-center'>
                            <label htmlFor="imageSelect" className='cursor-pointer'>
                                <h2 className='p-2 bg-primary text-white rounded-md px-3'>Select Image</h2>
                            </label>
                        </div>
                        <input 
                            type="file" 
                            id='imageSelect' 
                            className='hidden' 
                            multiple={false}
                            onChange={onImageSelect}
                        />
                    </div>
                ) : (
                    <div className='p-5 border border-dashed rounded-md shadow-md'>
                        <X className="flex justify-end w-full cursor-pointer "
                        onClick={() => setPreviewUrl(null)}
                        />
                    <Image 
                        src={previewUrl} 
                        alt='preview' 
                        width={500} 
                        height={500} 
                        className="w-full h-[300px] object-contain" 
                    />
                    </div>
                    
                )}
                <div className='p-7 border rounded-lg shadow-md'>
                    <h2 className='font-bold  text-lg'>Select Ai Model</h2>
                    <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select Ai Model" />
  </SelectTrigger>
  <SelectContent key={1}>
    {AiModelList.map((model, index) => (
        <SelectItem value={model.name}>
        <div key={index} className='flex items-center gap-2' >
            <Image src={model.icon} alt={model.name} width={25} height={25} />
            <h2>{model.name}</h2>
        </div>
        </SelectItem>
    ))}
    
  </SelectContent>
</Select>

                <h2 className='font-bold mt-7  text-lg'>Enter Description about your webpage</h2>
                <Textarea className='mt-3 h-[200px]' placeholder='Write about your webpage' />

            </div>
            </div>
            <div className='mt-10 flex justify-center items-center'>
                <Button> <WandSparkles/> Convert to Code</Button>
            </div>
        </div>
    )
}

export default ImageUpload