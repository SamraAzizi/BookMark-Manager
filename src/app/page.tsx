"use client"

import { use, useState } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useBookmarks } from "@/hooks/useBookmarks";
import { CreateBookmarkData } from "@/types/bookmark";
import styles from "./page.module.css";

export default function Home() {

  const { bookmarks, loading, error, addBookmark, deleteBookmark, refetch} = 
    useBookmarks();



    const [ showAddForm, setShowAddForm] = useState(false)
    const [ isSubmitting, setIsSubmitting] = useState(false)

    const handleAddBookmark = async (data: CreateBookmarkData) => {
      try{
        setIsSubmitting(true)
        await addBookmark(data)
      }
    }





  
}
