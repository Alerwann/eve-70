"use client";
import { useEffect, useState } from "react";
import CardPost from "@/component/cardPost";
import ImageFond from "@/component/fond_image";
import { selectLimitPost } from "./utils/post_info_database_funciton";

export default function Home() {

	const [loading, setLoading] = useState(false);
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		async function loadData() {
			setLoading(true);
			try {
				const data = await selectLimitPost();
				setAllPosts(data);
			} catch (error) {
				console.error("Erreur chargement:", error.message);
			} finally {
				setLoading(false);
			}
		}
		loadData();
	}, []);

	if (loading) {
		return <div>En chargement</div>;
	}

	return (
		<main className="overflow-y-auto">
			<ImageFond />
			<div className="bg-sky-100   ">
				<h1 className="text-center text-2xl mb-10">
					Bienvenue sur le site d'échanges d'annecdotes sur eve
				</h1>
				<section>
					<p className="text-center">
						Voici un site pour paratager nos photos et annecdotes avec Eve.
						<br />
						Il est possible de poster des photos ou juste des annecdotes. Une
						fois poster d'autre pourront commenter l'histoire. <br />À partir de
						octobre nous extrairons les photos, les histoire et les commentaires
						pour en faire un format papier. <br />
						Il se peut que d'autres personnes utilisent les informations pour en
						faire un text, une chanson ou autre.
						<br />
						Une fois l'événement passé, ce site sera communiqué avec Eve et on
						pourra évidemment communiquer nos plus belles photo de cette soirée.
						<br></br>À vos souvenir et vos plumes ...
					</p>
				</section>
			</div>

			<div>
				<CardPost allPosts={allPosts} />
			</div>
			<div>
				{/* <Link
          href="/test"
          className="underline underline-offset-8 text-red-400"
        >
          page test
        </Link> */}
			</div>
		</main>
	);
}
