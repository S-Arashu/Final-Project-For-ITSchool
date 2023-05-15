import React from 'react';

const List = ({ repos } )  => {
        
    
        let rep = repos.filter(el => el.type === "сериал")
        let repC = repos.filter(el => el.type === "комикс")

        console.log(rep.id)
        console.log(repC)

        let arr = [];

        for (let i=0; i<rep.length; i++){
            arr.push(i)
        }

    if (!repos || repos.length === 0) return <p>Информация не найдена</p>;
    return (
        <>
        <p className='description'>Экранизация комикса. В центре внимания всё тот же Рик Граймс и его поиски семьи, а потом строительство общины выживших. В целом сюжет следует первоисточнику почти что с идеальной точностью, но вот в деталях рознится. Введено немало новых героев, добавлены персонажи книг, а кто-то убран, некоторым изменяют судьбу, пол, характеры. Часто сериал критикуется за любовь превращать любую интересную идею в очередное противостояние риковцев с бесконечными группами выживших, заваливать зрителей болтовнёй или любовными линиями. Особенно этим печально прославились сезоны 4-8, отталкивающие почти всех зрителей, кроме совсем уж фанатов, несмотря на то, с началом войны против Шепчущихся качество заметно вырастет.</p>
        
        <h2 className='title'>Персонажи</h2>
        {arr.map((repo) => {
            console.log(rep[repo])
            let textSpoilers;
            textSpoilers = repC[repo].spoilers || false
            return (
            
                <div className='listCharacterContainer'>
                    <div onMouseOver={(e) => {if(e.currentTarget === e.target) {
                        console.dir(e.target); 
                        let myElement = e.target;
                        console.log(myElement); 
                        let height = e.target.nextElementSibling.lastElementChild.clientHeight;
                        
                        if(e.target.lastChild.clientHeight > e.target.nextElementSibling.lastElementChild.clientHeight){
                            let myElementCont = e.target.parentElement;
                            height = e.target.lastChild.clientHeight
                            myElementCont.style.setProperty('--img-height', height + 'px');
                        };
                        myElement.style.setProperty('--element-height', height + 'px');
                        }}} className='listCharacter' key={rep[repo].id}>
                        <div className='front'>
                            <img src={rep[repo].img} />
                            
                        </div>
                        <div className='back'>
                            <img src={repC[repo].img} />
                        </div>
                    </div>
                    <div className='listDesc' key={repC[repo].id}>
                        <div className='frontDesk'>
                            <h3>{rep[repo].name}</h3>
                            <p className='desc'>{rep[repo].description}</p>
                            {textSpoilers && (
                                <>
                                <input type="checkbox" id={repo} className="hide"/>
                            <label for={repo} >Внимание, спойлеры!</label>
                            <div className='spoiler'>{repC[repo].spoilers}</div>
                            </>
                            )}
                            
                        </div>
                        <div className='backDesk'>
                            <h3>{repC[repo].name}</h3>
                            <p className='desc'>{repC[repo].description}</p>
                        </div> 
                    </div>
                </div>
            );
        })}
        
        </>
    );
};
export default List;