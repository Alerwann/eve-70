"use client";
import * as React from "react";

import { useEffect, useState } from "react";

import { categoryPost } from "@/app/utils/post_info_database_funciton";
import CardPost from "@/component/cardPost";

export default function CategoryPage({ params }) {
	const categoryName = React.use(params).slug;
	
    const [allCategoryPosts, setAllCategoryPosts]= useState([]);
    const [loading, setLoading]= useState(false);

useEffect(() => {
  if (!categoryName) return;

  async function loadData(category) {
    setLoading(true);
    try {

      const data = await categoryPost(category);
      setAllCategoryPosts(data);
    } catch (error) {
      console.error("Erreur chargement:", error.message);
    } finally {
      setLoading(false);
    }
  }

  loadData(categoryName);
}, [categoryName]); 
 

	if (loading) {
		return <div>En chargement</div>;
	}
    if(allCategoryPosts.length ===0 ){
        return <main>Pas encore de post</main>
    }
       
	return (
		<main>
         
			<CardPost allPosts={allCategoryPosts} />
		</main>
	);
}
