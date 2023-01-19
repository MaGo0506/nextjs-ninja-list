import styles from '../../styles/Ninjas.module.css'
import Link from "next/link";
import Counter from "@/components/Counter";
import {useSelector} from "react-redux";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    const count = useSelector(state => state.counter.count)

    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <div key={ninja.id}>
                    <Link href={`/ninjas/${ninja.id}`} className={styles.single}>
                        <h3>{ ninja.name }</h3>
                    </Link>
                </div>
            ))}
            <hr/>
            {ninjas.map(ninja => (
                <div key={ninja.id}>
                    <div className={styles.single}>
                        <h3>{ ninja.name }</h3>
                    </div>
                </div>
            ))}
            <h2>The count: {count}</h2>
            <Counter/>
        </div>
    );
}

export default Ninjas