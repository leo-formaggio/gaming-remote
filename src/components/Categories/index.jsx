import { Category } from '../Category'
import './style.css'

const categories = [
	{
		id: 1,
		title: 'Notebooks',
		imageUrl: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwZ2FtaW5nfGVufDB8fDB8fHww'
	},
	{
		id: 2,
		title: 'Monitores',
		imageUrl:'https://images.unsplash.com/photo-1495954222046-2c427ecb546d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMHNldHVwfGVufDB8fDB8fHww'
	},
	{
		id: 3,
		title: 'Jogos',
		imageUrl:'https://preview.redd.it/pc-gamer-playnite-o-organizador-de-jogos-que-vai-te-fazer-v0-j9zsker94r4c1.png?width=1914&format=png&auto=webp&s=94ef3b5ec03f5c8ce84c979e14557c4c0d432aee'
	},
	{
		id: 4,
		title: 'Periféricos',
		imageUrl:'https://plus.unsplash.com/premium_photo-1687854992749-e15cba89631d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D'
	}
]

export function Categories() {
	return (
		<div className="container-home">
			{categories.map((category) => {
				return <Category category={category} key={category.title} />
			})}
		</div>
	)
}