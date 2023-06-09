import React from 'react';

const FooterInfo = () => {
    return (
        <div className='flex items-center flex-col mt-[100px]'>
            <div className='mb-10 font-bold text-2xl'>
                Информация об оплате
            </div>
            <div className='w-[1200px] bg-gray-700 rounded-lg flex items-center flex-col p-4 font-bold text-lg mb-20'>
                <div className='text-xl mb-8'>
                    Наличный расчёт
                </div>
                <div>
                    Оплата производится наличными курьеру при доставке заказа или самовывозом из точки продаж. При оформлении заказа укажите сумму, с которой Вам необходима сдача.
                </div>
            </div>

        </div>
    );
};

export default FooterInfo;