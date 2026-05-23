"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import { categoryPost } from "@/app/utils/post_info_database_funciton";
import {tradName} from "@/app/utils/trad_name";
import ImageFond from "@/component/global/fond_image";
import CardPost from "@/component/postCard/cardPost";
import EmptyScreen from "@/component/screensParticular/emptyScreen";
import LoadingScreen from "@/component/screensParticular/loadingScreen";

export default function CategoryPage({ params }) {
	const categoryName = React.use(params).slug;

	const [allCategoryPosts, setAllCategoryPosts] = useState([]);
	const [loading, setLoading] = useState(false);

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

	const messageCat = tradName(categoryName);

	if (loading) {
		return <LoadingScreen />;
	}
	if (allCategoryPosts.length === 0) {
		return (
			<div>
				<ImageFond />
				<p className="w-full p-5 text-center text-2xl font-medium bg-purple-100/50">
					{messageCat}
				</p>
				<EmptyScreen />
			</div>
		);
	}

	return (
		<main>
			<ImageFond />
			<p className="w-full p-5 text-center text-2xl font-medium bg-purple-100/50">
				{messageCat}
			</p>
			<CardPost allPosts={allCategoryPosts} />
		</main>
	);
}
