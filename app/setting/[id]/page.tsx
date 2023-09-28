export default function Page({ params }: { params: { id: string } }){
    return <h1>My Setting {params.id}</h1>
  }