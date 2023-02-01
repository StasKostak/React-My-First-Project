export type AuthorsProps = {
    id:number
    name:string
    content: string
    image:string
    category:string
}

const authorsArray:AuthorsProps [] = [
    {
        id:1,
        name:"John Smith",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis dolorum incidunt delectus ut officiis consequatur mollitia facere, nulla dolores, est quia nemo cum optio ratione ipsam aperiam illo sapiente!",
        image:"/images/author1.jpg",
        category:"",
    },
    {
        id:2,
        name:"Mary Jose",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis dolorum incidunt delectus ut officiis consequatur mollitia facere, nulla dolores, est quia nemo cum optio ratione ipsam aperiam illo sapiente!",
        image:"/images/author2.jpg",
        category:"",
    },
    {
        id:3,
        name:"Linda Jerry",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis dolorum incidunt delectus ut officiis consequatur mollitia facere, nulla dolores, est quia nemo cum optio ratione ipsam aperiam illo sapiente!",
        image:"/images/author3.jpg",
        category:"",
    },
]

export default authorsArray