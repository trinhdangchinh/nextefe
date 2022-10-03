import React from 'react';


function Card() {
    return (
        <div>
            <div className="box-shadow1 card1">
                <canvas width="3" height="2" className="fit-canvas"></canvas>
                <img className="card1__img" src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw09a0985f/images/Fadil/Hinh-anh-Mua-xe-VinFast-Fadil-ban-nang-cao-tra-gop-mau-do-Red.png" alt=""></img>
                <div className="card1__text boxtext-v typo-1">
                    <span className="">VINFAST FADIL</span>
                    <div className="btn-outline box-m1 typo-p-1  border-solid border-2 border-prim">TÌM HIỂU THÊM</div>
                </div>
                <a href="">
                </a>
            </div>
        </div>
    );
};

export default Card;