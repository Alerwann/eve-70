"use client";
import { useEffect, useState } from "react";
import {
	insertPostBase,
	selectAllPost,
	uploadImage,
} from "@/app/utils/post_info_database_funciton";
import CardPost from "@/component/cardPost";
import { supabase } from "@/supabase";

export default function Home() {
	const [userName, setUserName] = useState("Moi");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("Général");
	const [file, setFile] = useState(null);
	const [loading, setLoading] = useState(false);
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		async function loadData() {
			try {
				const data = await selectAllPost();
				setAllPosts(data);
			} catch (error) {
				console.error("Erreur chargement:", error.message);
			}
		}

		loadData();
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();
		if (!description && !file)
			return alert("Ajoute au moins un texte ou une photo !");

		setLoading(true);
		try {
			let publicUrl = null;
			if (file) {
				publicUrl = await uploadImage(file);
			}

			await insertPostBase(userName, description, category, publicUrl);

			const updatedData = await selectAllPost();
			setAllPosts(updatedData);

			alert("Post publié !");
			setDescription("");
		} catch (error) {
			alert("Erreur : " + error.message);
		} finally {
			setLoading(false);
		}
	}

	if (loading) {
		return <div>En chargement</div>;
	}
	return (
		<main>
			<h1> Bienvenue sur le site d'échanges d'annecdotes sur eve</h1>

			<div className="w-full">
				Ajout d'un post rapide
				<form onSubmit={handleSubmit}>
					<textarea
						className="w-0.8 border-4 border-violet-400 "
						onChange={(e) => setDescription(e.target.value)}
					/>
					<button
						type="submit"
						className="border-2 rounded-2xl border-green-600 p-2 cursor-pointer "
					>
						Valider
					</button>
				</form>
			</div>
			<div>
				<CardPost allPosts={allPosts} />
			</div>
		</main>
	);
}
