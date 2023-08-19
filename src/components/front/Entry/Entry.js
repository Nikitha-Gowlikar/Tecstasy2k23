import React from 'react'
import "./Entry.css"

const Entry = () => {
  return (
    <>
        <header class="text-gray-300 md:absolute flex px-8 container mx-auto left-0 right-0 pt-10">
</header>
<main class="w-full h-screen grid md:grid-cols-12 container mx-auto px-8 gap-x-10 md:place-items-center pb-10 lg:pb-0 min-h-[42.5rem]">

  <div class="md:col-span-6 text-white my-14 lg:my-0">
    <h1 class="capitalize text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">merry christmas</h1>
    <p class="mt-4 mb-10 max-w-lg leading-relaxed text-gray-300"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime necessitatibus sed facere repellendus voluptatem molestiae assumenda, tempora deleniti, inventore nostrum veritatis dicta sequi doloribus.</p>
    <a href="#" class="inline-block capitalize font-semibold bg-gradient-to-r from-purple-500 to-pink-800 rounded-full px-7 py-2 hover:from-purple-500 hover:to-gray-800">learn more</a>
  </div>
  <img src="https://cdn.pixabay.com/photo/2016/03/31/23/49/christmas-1297870_960_720.png" alt="Santa Claus" class="md:col-span-6 max-w-full"/>
</main>
    </>
  )
}

export default Entry