import React from 'react'

const Testimonials = () => {
  return (
		<>
			<h1 className="md:text-5xl text-olive font-[karla] font-medium text-center mb-10 mt-[80px]">
				Testimonials
			</h1>
			<section className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
				<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 className="text-lg font-semibold text-gray-900 ">
							Great food and atmosphere
						</h3>
						<p className="my-4">
							If you care for great food and atmosphere, I hands down would go with Little Lemon."
						</p>
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
						<img
							className="rounded-full w-9 h-9"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
							alt="profile"
						/>
						<div className="space-y-0.5 font-medium text-left">
							<div>Bonnie Green</div>
							<div className="text-sm text-gray-500 text-olive">
								Developer at Open AI
							</div>
						</div>
					</figcaption>
				</figure>
				<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 className="text-lg font-semibold text-gray-900 ">
							Excellent food and service
						</h3>
						<p className="my-4">
							My friend and I were at the Little Lemon last night for dinner.
							I want to thank you and the rest of the staff for the excellent
							food and service provided. It was our first visit and we both
							agreed that it was a wonderful experience. Thanks again for the
							hospitality,"
						</p>
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
						<img
							className="rounded-full w-9 h-9"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
							alt="profile"
						/>
						<div className="space-y-0.5 font-medium text-left">
							<div>Roberta Casas</div>
							<div className="text-sm text-olive text-gray-400">
								Lead designer at Dropbox
							</div>
						</div>
					</figcaption>
				</figure>
				<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 className="text-lg font-semibold text-gray-900 d">
							Mindblowing experience
						</h3>
						<p className="my-4">
							Last Friday I came for restaurant week. It was FABULOUS! The
							portions were overly generous. Everything was so yummy – what a
							bargain. I will be back soon."
						</p>
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
						<img
							className="rounded-full w-9 h-9"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
							alt="profile"
						/>
						<div className="space-y-0.5 font-medium text-left">
							<div>Jese Leos</div>
							<div className="text-sm text-gray-500">
								Software Engineer at Facebook
							</div>
						</div>
					</figcaption>
				</figure>
				<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 className="text-lg font-semibold text-gray-900">
							Delightful experience all round
						</h3>
						<p className="my-4">
							Everyone had a wonderful time at The Little Lemon last night. As
							expected, the food was delicious and our servers were so friendly
							and helpful – we loved them! It was a delightful experience all
							round. Thank you so much for hosting us. We hope we can come back
							again soon.."
						</p>
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
						<img
							className="rounded-full w-9 h-9"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
							alt="profile"
						/>
						<div className="space-y-0.5 font-medium text-left">
							<div>Joseph McFall</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">
								CTO at Google
							</div>
						</div>
					</figcaption>
				</figure>
			</section>
		</>
	);
}

export default Testimonials