import React from 'react';
import st from './homeSix.module.scss'
import cx from 'classnames'
import {Link} from 'react-router-dom'

import {Title,BgComponent,Button} from '../../../component';

import p1 from '../../../svg/person1.jpg'
import p2 from '../../../svg/person2.jpg'
import p3 from '../../../svg/person3.jpg'
import quote from '../../../svg/quote.svg'
import star from '../../../svg/star.svg'
import next from '../../../svg/Next.svg'
import eBlue from '../../../svg/ellipseBlue.svg'
import eRed from '../../../svg/ellipseRed.svg'
import bImg1 from '../../../svg/blog.jpg'
import bImg2 from '../../../svg/blog2.jpg'
import repeat from '../../../svg/repeat.svg'
import right from '../../../svg/bgLeftSmall.svg'
import left from '../../../svg/bgLeftMiddle.svg'
import rRed from '../../../svg/rRed.svg'
import rBlue from '../../../svg/rBlue.svg'



const HomeSix = () => {
    const title = [
        {title:"Реальные отзывы", text:"Что они говорят о наших Компания?"},
        {title:"НАШ БЛОГ", text:"Благодаря нашим компания ваш бизнес перед нюшными людьми в нужное время, чтобы увеличить органический трафик и повысить вовлеченность"}
    ]



    return (
        <div className={cx(st.six)}>
            <Title title={title[0].title} text={title[0].text} width="60%" />
            <div>
                <p className={cx(st.six_p)}>
                    Мы знаем, как важно качество обслуживания клиентов для бизнеса, и поэтому мы стремимся  сделать вашу компанию успешной в этом.
                </p>
            </div>
            <div className={cx(st.content_card)}>
                {card()} 
            </div>

            <Title title={title[1].title} text={title[1].text} width="60%" />
            {blog()}
            <BgComponent bgImg={repeat} top="55%" zIndex="-10" right="0"/>
            <BgComponent bgImg={left} top="30%" zIndex="-10" left="0"/>
            <BgComponent bgImg={right} top="10%" zIndex="-10" right="0" deg="180"/>
            <BgComponent bgImg={rBlue} top="60%" zIndex="-10" right="5%" />
            <BgComponent bgImg={rRed} top="63%" zIndex="-10" right="5%" />
            <div className={cx(st.repeat)}>
                <img src={repeat} alt=""/>
            </div>
        </div>
    );
}

export default HomeSix;







const card = () => {
    return(
        <div  className={cx('row rowP')}>
            <div className={cx('col-md-6 col-sm-12 my-5')}>
                <div className={cx(st.bg)} >
                    <img src={eBlue} alt="" className={cx(st.bg_img)} />
                </div>
                <div className={cx(st.card)}>
                    <div className={cx(st.card_box)}>
                        <img src={p1} alt="" className={cx(st.card_box_img, 'img-fluid')} />
                    </div>
                    <div className={cx(st.card_quote)}>
                        <img src={quote} alt="" className={cx(st.card_quote_img)} />
                    </div>
                    <p className={cx(st.card_p)}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aperiam repudiandae adipisci accusamus quas placeat ut tempora at.
                    </p>
                    <div className={cx(st.card_content)}>
                        <div>
                            <h5 className={cx(st.card_h5)} >Marget Sunsan</h5>
                            <small className={cx(st.card_small)}>Developer</small>
                        </div>
                        <div className={cx(st.card_star)}>
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('col-md-6 col-sm-12 my-5')}>
                <div className={cx(st.card,st.card_2, 'mx-auto')}>
                    <div className={cx(st.card_box)}>
                        <img src={p2} alt="" className={cx(st.card_box_img, 'img-fluid')} />
                    </div>
                    <div className={cx(st.card_quote)}>
                        <img src={quote} alt="" className={cx(st.card_quote_img)} />
                    </div>
                    <p className={cx(st.card_p)}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aperiam repudiandae adipisci accusamus quas placeat ut tempora at.
                    </p>
                    <div className={cx(st.card_content)}>
                        <div>
                            <h5 className={cx(st.card_h5)} >Marget Sunsan</h5>
                            <small className={cx(st.card_small)}>Developer</small>
                        </div>
                        <div className={cx(st.card_star)}>
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            <img src={star} alt="" className={cx(st.card_star_img)} />
                            
                        </div>
                    </div>
                </div>
                <div className={cx(st.bg_2)} >
                    <img src={eRed} alt="" className={cx(st.bg_2_img_2)} />
                </div>
            </div>
        </div>
        
    )
};

const blog = () => {
    return (
        <div className={cx(st.blog)}>
                <div className={cx(st.blog_card, 'row')}>
                    <div className={cx(st.blog_img_box, 'col-md-4 col-sm-12')}>
                        <img src={bImg1} alt="" className={cx(st.blog_img, 'img-fluid mx-auto')} />
                    </div>
                    <div className={cx(st.blog_text_box, 'col-md-8 col-sm-12')}>
                        <div style={{alignSelf:'center'}}>
                            <div>
                                <Button text="SEO NEWS" padding="1rem 2rem" color_1="#EB4010" color_2="#FE6C0C"/>
                            </div>
                            <div>
                                <h5 className={cx(st.blog_h5)}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde id deserunt consectetur officiis.
                                </h5>
                            </div>
                            <div className={cx(st.blog_content)}>
                                <div style={{alignSelf:"center", textAlign:'center'}} className={cx('col-sm-2')}>
                                    <img src={p3} alt="" className={cx(st.blog_content_img, 'img-fluid')}/>
                                </div>
                                <div className={cx('col-sm-8 row')} >
                                    <div className={cx(st.blog_span)}>Admin</div>
                                    <div className={cx(st.blog_span)}>27 July 2020</div>
                                    <div className={cx(st.blog_span)}>0 Comments</div>
                                </div>
                                <div className={cx('ml-auto col-sm-2', st.next)} >
                                    <Link to="/blog">
                                        <img src={next} alt=""/>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className={cx(st.blog_card, 'row')}>
                    <div className={cx(st.blog_img_box, 'col-md-4 col-sm-12')}>
                        <img src={bImg2} alt="" className={cx(st.blog_img, 'img-fluid mx-auto')} />
                    </div>
                    <div className={cx(st.blog_text_box, 'col-md-8 col-sm-12')}>
                        <div style={{alignSelf:'center'}}>
                            <div>
                                <Button text="SEO NEWS" padding="1rem 2rem" color_1="#EB4010" color_2="#FE6C0C"/>
                            </div>
                            <div>
                                <h5 className={cx(st.blog_h5)}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde id deserunt consectetur officiis.
                                </h5>
                            </div>
                            <div className={cx(st.blog_content)}>
                                <div style={{alignSelf:"center", textAlign:'center'}} className={cx('col-sm-2')}>
                                    <img src={p3} alt="" className={cx(st.blog_content_img, 'img-fluid')}/>
                                </div>
                                <div className={cx('col-sm-8 row')}>
                                    <div className={cx(st.blog_span)}>Admin</div>
                                    <div className={cx(st.blog_span)}>27 July 2020</div>
                                    <div className={cx(st.blog_span)}>0 Comments</div>
                                </div>
                                <div className={cx('ml-auto col-sm-2',st.next)} >
                                    <Link to="/blog">
                                        <img src={next} alt=""/>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
    )
}