"use client";
import { useState } from "react";
import {
	insertPostBase,
	uploadImage,
} from "@/app/utils/post_info_database_funciton";
import ImageFond from "@/component/global/fond_image";
import LoadingScreen from "@/component/screensParticular/loadingScreen";

export default function AddComment() {
	const [file, setFile] = useState(null);
	const [userName, setUserName] = useState("");
	const [legend, setLegend] = useState("");
	const [category, setCategory] = useState("");
	const [loading, setLoading] = useState(false);

	const [title, setTitle] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		if (!legend && !file)
			return alert("Ajoute au moins un texte ou une photo !");

		setLoading(true);
		try {
			let publicUrl = null;
			if (file) {
				publicUrl = await uploadImage(file);
			}

			await insertPostBase(userName, title, legend, category, publicUrl);


			alert("Post publié !");
			setLegend("");
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}
	if (loading) {
		return <LoadingScreen/>;
	}
	return (
		<main className="  flex flex-col gap 5   ">
			<ImageFond />
			<h2 className="text-3xl m-5 text-center">Formulaire d'ajout de posts </h2>
			<form className="flex flex-col items-center" onSubmit={handleSubmit}>
				<div className=" p-2 m-1 grid grid-cols-[1fr_2fr] gap-10 bg-purple-100">
					<label htmlFor="userName" className="text-center">
						Nom ou surnom{" "}
					</label>
					<input
						id="userName"
						name="userName"
						type="text"
						className="p-2 flex-2 border-2 bg-gray-50 rounded-2xl "
						onChange={(e) => setUserName(e.target.value)}
						required
					/>
					<label htmlFor="title" className="text-center">
						Titre du post{" "}
					</label>
					<input
						id="title"
						name="title"
						type="text"
						className="p-2 flex-2 border-2 bg-gray-50 rounded-2xl "
						onChange={(e) => setTitle(e.target.value)}
						required
					/>

					<label htmlFor="file" className="text-center">
						Ajout d'une photo (format Jpeg ou png)
					</label>
					<input
						type="file"
						className="bg-gray-50 cursor-pointer rounded-2xl p-2"
						id="upload"
						accept="image/png, image/jpeg"
						onChange={(e) => {
							setFile(e.target.files[0]);
						}}
					/>

					<label htmlFor="selectCat" className="text-center">
						Catégorie
					</label>
					<select
						onChange={(e) => setCategory(e.target.value)}
						id="selectCat"
						name="selectCat"
					>
						<option value={""}>--Veuillez choisir une catégorie--</option>
						<option value={"ami"}>Amis</option>
						<option value={"famille"}>Famille</option>
						<option value={"dossier"}>Photos dossier</option>
						<option value={"voyage"}>Voyage</option>
					</select>

					<label htmlFor="description" className="text-center">
						Légende / Annecdotes
					</label>
					<textarea
						id="description"
						name="description"
						className="  bg-gray-50 p-2"
						onChange={(e) => setLegend(e.target.value)}
					></textarea>
				</div>
				<div className="w-full flex flex-row  justify-around">
					<div>
						<button
							type="submit"
							className="p-5 border-2 bg-green-400 cursor-pointer  rounded-3xl"
						>
							Envoyer
						</button>
					</div>
					<div>
						<button
							type="button"
							className="p-5 border-2 bg-red-400 cursor-pointer  rounded-3xl"
						>
							Annuler
						</button>
					</div>
				</div>
			</form>
		</main>
	);
}
