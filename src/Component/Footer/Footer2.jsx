import React from 'react';

const Footer2 = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content py-7 p-4 border-t border-t-gray-600">
                <aside>
                    <p className='font-semibold text-gray-400'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer2;