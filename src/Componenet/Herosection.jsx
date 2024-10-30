

export default function Herosection() {
  return (
    <div className="flex justify-center gap-10 mt-20">
      <div>
        <h1 className="text-[38px] font-bold">Hi, I am Chisom, <br /> Creative Technologist</h1>
        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit tenetur quae, <br /> ad sequi aperiam ducimus autem provident iste natus officia <br /> animi sed aut illum saepe placeat perferendis odit eum?</p>

        <button className="bg-red-500 p-2 mt-6 text-sm text-white hover:bg-red-600  hover:text-black">Download Resume</button>
      </div>
      <div>
        <img src="/public/images/1.jpg" alt="my image" className="w-60 h-60 rounded-full"/>
      </div>
    </div>
  )
}
