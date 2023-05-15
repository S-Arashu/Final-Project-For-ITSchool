import React from 'react';

const ListComics = (props) => {
    let { repos } = props;

        let rep = repos.filter(el => el.type === "сериал")
        let repC = repos.filter(el => el.type === "комикс")

        let arr = [];

        for (let i=0; i<rep.length; i++){
            arr.push(i)
        }
    if (!repos || repos.length === 0) return <p>Информация не найдена</p>;
    return (
        <>
        <p className='description changeTheme'>«Ходячие мертвецы» — основное творение во всей франшизе, ныне завершённое. Рассказывает о жизни полицейского из Кентукки по имени Рик Граймс, на одном из вызовов получившим сильное ранение и впавшем в кому, а на выходе обнаруживший конец света в полном разгаре. На улице ходят мертвецы, дома брошены, а семья куда-то делась. Их он быстро находит, но взамен получал всё больше и больше проблем: то надо в группе порядок навести, то орда-другая, то уже живые оказываются хуже любых упырей. Последнее со временем вышло на первый план, подарив нам интереснейших антагонистов, вроде харизматичного социопата Губернатора, благородного тирана Нигана и странных Шепчущихся. На данный момент комикс закончился вместе с аркой Граймсов.</p>
        
        <h2 className='title titleComics'>Персонажи</h2>
        {arr.map((repo) => {

            let textSpoilers;
            textSpoilers = repC[repo].spoilers || false
            return (
            
                <div className='listCharacterContainer' >
                    <div onMouseOver={(e) => {if(e.currentTarget === e.target) { 
                        let myElement = e.target; 
                        let height = e.target.nextElementSibling.lastElementChild.clientHeight;
                        if(e.target.lastChild.clientHeight > e.target.nextElementSibling.lastElementChild.clientHeight){
                            let myElementCont = e.target.parentElement;
                            height = e.target.lastChild.clientHeight
                            myElementCont.style.setProperty('--img-height', height + 'px')
                        };
                        myElement.style.setProperty('--element-height', height + 'px')
                        }}} 
                        className='listCharacter' key={rep[repo].id}>
                        <div className='front'>
                            <img src={repC[repo].img} />
                            
                        </div>
                        <div className='back'>
                            <img src={rep[repo].img} />
                        </div>
                    </div>
                    <div className='listDesc' key={repC[repo].id}>
                        <div className='frontDesk changeTheme' >
                            <h3>{repC[repo].name}</h3>
                            <p className='desc'>{repC[repo].description}</p>
                            {textSpoilers && (
                                <>
                                <input type="checkbox" id={repo} className="hide"/>
                            <label htmlFor={repo} >Внимание, спойлеры!</label>
                            <div className='spoiler'>{repC[repo].spoilers}</div>
                            </>
                            )}
                            
                        </div>
                        <div className='backDesk changeThemeSerial'>
                            <h3>{rep[repo].name}</h3>
                            <div className='desc'>{rep[repo].description}</div>
                        </div> 
                    </div>
                </div>
            );
        })}
        
        </>
    );
};
export default ListComics;