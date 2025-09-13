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

})