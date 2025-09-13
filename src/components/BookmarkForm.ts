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

        if(!isEditing){
            setFormData({})
        }

    }
}