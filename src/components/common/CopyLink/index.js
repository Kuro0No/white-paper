import { Button, Snackbar } from '@material-ui/core';
import React from 'react'
import copyIcon from '../../../assets/icon/copy-none.png'
import './index.scss'


const CopyLink = ({ borderLeft, openToasty, setOpenToasty }) => {

    const handleClick = () => {
        setOpenToasty(true);

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        console.log(reason)
        setOpenToasty(false);
    };
    console.log(openToasty)
    return (
        <div className={`copy-link-container ${borderLeft ? 'ps-24 border-left-copyLink' : ''} `}>
            <div onClick={() => handleClick()} className='copy-link d-flex'>
                <svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" className="r-1ghhsy9" width={18}><path d="M14.11 6.6l-.16-.09c-.042.343-.13.68-.26 1A3 3 0 0115 10a3 3 0 01-3 3H8a3 3 0 010-6h.82A3 3 0 009 6H8a4 4 0 000 8h4a4 4 0 002.11-7.4z" fill="currentColor"></path><path d="M1.89 9.4l.16.09c.042-.343.13-.68.26-1A3 3 0 011 6a3 3 0 013-3h4a3 3 0 110 6h-.82A3 3 0 007 10h1a4 4 0 000-8H4a4 4 0 00-2.11 7.4z" fill="currentColor"></path></svg>
                <p>Copy link</p>
            </div>
            <Snackbar
                className='toasty'
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={openToasty}
                autoHideDuration={3000}
                onClose={() => handleClose()}
            message={<div className='d-flex py-2'>
                <div className='me-4'>
                    <svg viewBox="0 0 16 16" fill="none" className='copy-none r-1ghhsy9 ' preserveAspectRatio="xMidYMid meet" width={24}><path fillRule="evenodd" clipRule="evenodd" d="M0 .5A.5.5 0 01.5 0h10a.5.5 0 01.5.5V4h-1V1H1v9h3v1H.5a.5.5 0 01-.5-.5V.5z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M5 5.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-10zM6 6v9h9V6H6z" fill="currentColor"></path></svg>
                </div>
                <div className='description-toast'>
                    <h6>Page URL coppied to clipboard</h6>
                    <p>Paste it whereever you like</p>
                </div>
            </div>}
            action={<div onClick={() => handleClose()} className='close'>x</div>}
            >
                {/* <div className='d-flex py-2'>
                    <div className='me-4'>
                        <svg viewBox="0 0 16 16" fill="none" className='copy-none r-1ghhsy9 ' preserveAspectRatio="xMidYMid meet" width={24}><path fillRule="evenodd" clipRule="evenodd" d="M0 .5A.5.5 0 01.5 0h10a.5.5 0 01.5.5V4h-1V1H1v9h3v1H.5a.5.5 0 01-.5-.5V.5z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M5 5.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-10zM6 6v9h9V6H6z" fill="currentColor"></path></svg>
                    </div>
                    <div className='description-toast'>
                        <h6>Page URL coppied to clipboard</h6>
                        <p>Paste it whereever you like</p>
                    </div>
                </div> */}
            </Snackbar>

        </div>
    )
}

export default CopyLink