"use client"

import { useState } from "react"
import { CreateBookmarkData } from "@/types/bookmark"

interface BookmarkFormProps {
    onSubmit: (data: CreateBookmarkData) => void
    intialData?: Partial<CreateBookmarkData>;
    isEditing?: boolean;
    isSubmitting: boolean;

}

export default function BookmarkForm({
    onSubmit,
    intialData,
    isEditing = false,
    isSubmitting = false,

}: BookmarkFormProps){
    const [ formData, setFormData] = useState<CreateBookmarkData>({
        url: intialData?.url || "",
        title: intialData?.title || "",
        notes: intialData?.notes || "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.url.trim() || !formData.title.trim() || isSubmitting){
            return
        }
        onSubmit(formData)

        

    }

    return <form onSubmit={handleSubmit} className="form">
    <h2 className="form-title">
        Add New Bookmark
    </h2>

    <div className="form-group">
        <label htmlFor="url" className="form-label">
            URL *
        </label>
        <input 
        type="url"
        id="url"
        onChange={(e) => setFormData(prev => ({...prev, url:e.target.value}))}
        className="form-input"
        placeholder="https://example.com"
        required
        disabled={isSubmitting}
        
        
        />
 
    </div>


    <div className="form-group">
        <label htmlFor="title" className="form-label">
            Title *
        </label>
        <input 
        type="text"
        id="title"
        onChange={(e) => setFormData(prev => ({...prev, title:e.target.value}))}
        className="form-input"
        placeholder="Enter Title"
        required
        disabled={isSubmitting}
        
        
        />
 
  
    



    
    </form>
}