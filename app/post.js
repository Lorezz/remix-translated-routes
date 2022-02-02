
const posts = [
    {
      slug: "my-first-post",
      title: "My First Post"
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You"
    }
  ];

export function getPosts(){
   return posts
}


export function getPost(slug){
   return posts.find(p=>p.slug===slug)
}
