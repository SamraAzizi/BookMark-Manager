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
        setShowAddForm(false)
      }catch(err){
        console.log("failed to add bookmark", err)
      }finally{
        setIsSubmitting(false)
      }
    }

    const handleDeleteBookmark = async (id: string) =>{
      if (confirm("Are you sure you want to delete this bookmark? ")){
        try{
          await deleteBookmark(id)
        }catch(error){
          console.log("Failed to delete bookmark", error)
        }
      }
    }


    if (loading){
      return <div className={styles["loading-container"]}>
        <div className={styles["loading-content"]}>
          <p>Loading bookmark...</p>

        </div>

      </div>
    }

    return <div>
      <SignedIn>

      <div className="container">
        <div className={styles["page-header"]}>
          <div className={styles["header-text"]}>
            <h1>Bookmark Manager</h1>
            <p>Organize and manage your bookmarks</p>

          </div>
          <div className={styles["header-button"]}>
            <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
              {showAddForm ? "Cancle": "Add Bookmark"}

            </button>

          </div>
          
        </div>

      </div>


      {error && <div className={styles["error-message"]}>

        <p>Error: {error}</p>

        <button onClick={refetch} className="btn btn-secondary">
          Retry

        </button>
        
        
        </div>}

      </SignedIn>


      <SignedOut>
        <div className={styles["Signedout-container"]}>
          <div className={styles["Signout-content"]}>
            <p className={styles["signout-text"]}>Please sign in to manage your bookmark</p>

          </div>

        </div>
      </SignedOut>
    </div>



  
}
