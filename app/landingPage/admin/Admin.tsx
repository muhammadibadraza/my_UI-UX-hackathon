import Nav from"@/app/landingPage/admin/nav";
import Detail from"@/app/landingPage/admin/detail";
import Rental from"@/app/landingPage/admin/rental";
import Recent from"@/app/landingPage/admin/recent";

export default function Admin(){
    return(
        <>
        <div className="flex flex-col-3 mb-4 mr-4 ml-4 mt-4 justify-between bg-gray-100">
            <div className="mt-4 ml-4"><Nav /></div>
            <div className="flex mr-4 mt-4 ml-4"><Detail /></div>
            <div className="flex flex-end flex-col mt-4 mr-4 gap-6 mb-4">
             <Rental />
             <Recent />
            </div>
        </div>
        </>
    )
}