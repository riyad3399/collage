
import Container from '../../components/shared/Container';

const PressRelease = () => {
    return (
      <Container>
        <div className="bg-white min-h-screen px-5">
          <h3 className="font-bold text-xl py-5">প্রেস বিজ্ঞপ্তি</h3>
          <a href="#" className='font-bold  text-blue-500 hover:text-blue-700'>
            টেন্ডারের জন্য আমন্ত্রণ <span className='badge badge-primary'>04 Aug, 2019</span>
          </a>
        </div>
      </Container>
    );
};

export default PressRelease;