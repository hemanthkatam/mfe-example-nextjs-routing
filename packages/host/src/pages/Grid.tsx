import Link from 'next/link';
import React from 'react';

const GridComponent = () => {
    return (
        <div className="grid grid-cols" style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="grid-item" >
                <Link href="/remote/TacticalFootball"><img
                    onError={(e) => { e.target.src = '//eaassets-a.akamaihd.net/eahelp/assets/128.01-MINOR-RELEASE/public/build/images/default.png' }}
                    src="https://eaassets-a.akamaihd.net/eahelp/images/box-art/x2/fc-tactical.jpg"
                    alt="Tactical Football"
                /></Link>

                <div className="grid-image-text">Tactical Football</div>
            </div>
            <div className="grid-item" >
                <Link href="/remote/NH24">
                    <img
                        onError={(e) => { e.target.src = '//eaassets-a.akamaihd.net/eahelp/assets/128.01-MINOR-RELEASE/public/build/images/default.png' }}
                        src="https://eaassets-a.akamaihd.net/eahelp/images/box-art/x2/nhl-24.jpg"
                        alt="NHL 24"
                    />
                </Link>
                <div className="grid-image-text">NHL 24</div>
            </div>
            <div className="grid-item" >

                <Link href="/remote/FCmobile">
                    <img
                        onError={(e) => { e.target.src = '//eaassets-a.akamaihd.net/eahelp/assets/128.01-MINOR-RELEASE/public/build/images/default.png' }}
                        src="https://eaassets-a.akamaihd.net/eahelp/images/box-art/x2/fc-mobile.jpg"
                        alt="FC Mobile"
                    />
                </Link>
                <div className="grid-image-text">FC Mobile</div>
            </div>
            <div className="grid-item" >

                <Link href="/remote/FC23">
                    <img
                        onError={(e) => { e.target.src = '//eaassets-a.akamaihd.net/eahelp/assets/128.01-MINOR-RELEASE/public/build/images/default.png' }}
                        src="https://eaassets-a.akamaihd.net/eahelp/images/box-art/x2/f1-23.jpg"
                        alt="F1 23"
                    />
                </Link>
                <div className="grid-image-text">F1 23</div>
            </div>

        </div>
    );
}

export default GridComponent;
