import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, useAnimate } from "framer-motion";


const Modal = forwardRef(({disableOutsideClick = false, width = '100%', title = '', subTitle = '', noHeader = false, onClose = () => {}, children }, ref) => {
    const [mouseDownEl, setMouseDownEl] = useState(null);
    const [layoutScope, layoutAnimate] = useAnimate();
    const [contentScope, contentAnimate] = useAnimate();

    const closeModalOnOutsideClick = (e) => {
        if(mouseDownEl.closest('.modal-content-container') == null){
            if(disableOutsideClick === false){
                closeModal();
            }else{
                contentAnimate(contentScope.current,{scale:.95});
                setTimeout(()=>{
                    contentAnimate(contentScope.current,{scale:1});
                }, 50)
            }
        }
    }

    const closeModal = () => {
        layoutAnimate(layoutScope.current,{opacity:0});
        contentAnimate(contentScope.current,{scale:.95}, { duration: .2 });
        setTimeout(()=>{onClose()}, 200);
    }

    useImperativeHandle(ref, () => ({
        closeModal
    }));

    return (
        <motion.div ref={layoutScope} className="fixed p-[10px] bg-[rgba(0,0,0,.5)] z-[100] inset-0 flex items-center justify-center" initial={{opacity:0}} animate={{opacity:1}} onMouseDown={(e)=>setMouseDownEl(e.target)} onClick={(e)=>{closeModalOnOutsideClick(e)}}>
            <motion.div ref={contentScope} style={{maxWidth: width}} className="shadow-[0_10_40_0_rgba(0,0,0,.1)] w-[100%] max-h-[calc(100%_-_100px)] rounded-[10px] bg-[#FFFFFF] overflow-hidden modal-content-container" initial={{scale:.95}} animate={{scale:1}}>
                {noHeader === false && <div className="relative mx-[30px] mt-[30px] pb-[10px] border-b border-[#F3F3F3] text-h2 text-[#2F3448] font-semibold">
                    {title}
                    {subTitle && <div className="text-[13px] text-[#696778] font-normal leading-[18px]" dangerouslySetInnerHTML={{ __html: subTitle }}></div>}
                    <div className="absolute top-[-24px] right-[-24px] rounded-[50%] border p-[5px] cursor-pointer" onClick={()=>{closeModal()}}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.96918 11.03C10.0378 11.1037 10.1206 11.1628 10.2126 11.2038C10.3046 11.2448 10.404 11.2668 10.5047 11.2686C10.6054 11.2704 10.7054 11.2519 10.7988 11.2142C10.8922 11.1764 10.977 11.1203 11.0482 11.0491C11.1194 10.9778 11.1756 10.893 11.2133 10.7996C11.251 10.7062 11.2695 10.6062 11.2678 10.5055C11.266 10.4048 11.2439 10.3055 11.203 10.2135C11.162 10.1215 11.1029 10.0387 11.0292 9.97003L7.05918 6.00003L11.0292 2.03003C11.1617 1.88785 11.2338 1.69981 11.2304 1.50551C11.2269 1.31121 11.1482 1.12582 11.0108 0.988408C10.8734 0.850995 10.688 0.772283 10.4937 0.768855C10.2994 0.765426 10.1114 0.837549 9.96918 0.970029L5.99918 4.94003L2.02918 0.970029C1.887 0.837549 1.69896 0.765426 1.50465 0.768855C1.31035 0.772283 1.12497 0.850995 0.987555 0.988408C0.850142 1.12582 0.77143 1.31121 0.768002 1.50551C0.764574 1.69981 0.836697 1.88785 0.969177 2.03003L4.93918 6.00003L0.969177 9.97003C0.89549 10.0387 0.836388 10.1215 0.795396 10.2135C0.754404 10.3055 0.732362 10.4048 0.730585 10.5055C0.728809 10.6062 0.747333 10.7062 0.785054 10.7996C0.822775 10.893 0.87892 10.9778 0.950138 11.0491C1.02136 11.1203 1.10619 11.1764 1.19958 11.2142C1.29297 11.2519 1.393 11.2704 1.4937 11.2686C1.5944 11.2668 1.69372 11.2448 1.78571 11.2038C1.87771 11.1628 1.96051 11.1037 2.02918 11.03L5.99918 7.06003L9.96918 11.03Z" fill="#D8D8D8"/>
                        </svg>
                    </div>
                </div>}
                {children}
            </motion.div>
        </motion.div>
    )
})

export default Modal;

