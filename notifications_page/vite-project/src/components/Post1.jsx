import usuario1 from '../assets/images/avatar-mark-webber.webp'

function Post1(props){
    return(
        <div>
            <div class="flex gap-2 text-sm p-4 w-96 bg-veryLightGrayishBlue tracking-wider">
                <img class="w-12 h-12" src={props.imagen} alt="imagen-1" />
                <div>
                    <p>
                    <span class="font-bold">{props.nombre} </span>
                    <span class="text-black">{props.mensaje} </span>
                    <span class="font-bold text-darkGrayishBlue">{props.segundo} </span>
                    <span class="status">*</span>
                    </p>
                    <p class="text-darkGrayishBlue">1m ago</p>
                </div>
            </div>
        </div>
    );
}
export default Post1;