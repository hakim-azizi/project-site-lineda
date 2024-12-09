import { useEffect, useState } from 'react';
import { useLoaderData, useLocation,useNavigate } from 'react-router-dom';

function Keyword(){
    const [name,setName]=useState<string>('');
    const [description,setDescription]=useState<string>('');
    const [valid,setValid]=useState<boolean>(false);
    const [checked,setChecked]=useState<boolean>(false);
    const navigate = useNavigate();
    const data:any=useLoaderData();
    const datakeywords=data.keywords;
    const location = useLocation().pathname;
    const keyword:string=location.replace('/learn-more/','');
    useEffect(() => {
        
        datakeywords.forEach((datakeyword: any) => {
            if (datakeyword.name === keyword) {
                setName(datakeyword.name);
                setDescription(datakeyword.description);
                setValid(true);
            }
        });
           setChecked(true); // Indique que la vérification est terminée
           if (checked &&!valid) {
            navigate('/404');
        }
    }, [checked, valid, navigate,datakeywords, keyword]);

    return <>
                    <header>
                        <h1 className='center'>{name}</h1>
                    </header>
                    <main>
                        <section>
                        <h2>{name}</h2>
				<article>
					<p>
					{description}
					</p>
				</article>
                {/* <aside className='home'>
					{articles.map((article)=><Items key={article.name} name={article.name} picture={article.picture} price={article.price} url={article.url} />)}
                </aside> */}
            </section>
        </main>
</>;
}
export default Keyword;