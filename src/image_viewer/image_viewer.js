// import big from '../../assets/big.jpeg';
import small from '../../assets/small.jpeg';
import './image_viewer.css';

export default () => {
    const image = document.createElement('img');
    // image.src = 'https://picsum.photos/400/400/?random';
    image.src = small;
    document.body.appendChild(image);
}


// const bigImage = document.createElement('img');
// bigImage.src = big;
// document.body.appendChild(bigImage);