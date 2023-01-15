import Head from "next/head";
import Link from "next/link";

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    return {
        props: {ninja: data}
    }
}

const Details = ({ninja}) => {
    return (
        <>
            <Head>
                <title>Ninja List | {ninja.username}</title>
                <meta name="keywords" content="ninja"/>
            </Head>
            <div>
                <h1>{ninja.name}</h1>
                <p>{ninja.email}</p>
                <p>{ninja.website}</p>
                <p>{ninja.address.city}</p>
                <Link href={`/ninjas/${ninja.id}/posts`}>
                    {ninja.username}'s Posts
                </Link>
            </div>
        </>
    );
}

export default Details