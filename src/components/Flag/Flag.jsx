import React from 'react';
import style from './Flag.module.scss'
import Button from '../UI/Button/Button';


const buttonStyle = { background: 'red' }
const Flag = () => {
    return (
        <section className={style.flag}>
            <article className={style.flagContent}>
                <h1 className={style.textH1}>Test assignment for front-end developer</h1>

                <p className={style.textP}>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a
                    vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
                    should also be excited to learn, as the world of Front-End Development keeps evolving.
                </p>

                <div className={style.forButton}>
                    <Button
                        text={'Sign up'}
                        visible={false}
                    />
                </div>
            </article>

        </section>
    );
};

export default Flag;