import SliderIndex from '@/components/features/SliderIndex';
import { getSlider } from '@/api/services/SliderIndexContent';

const getSliderContent = async () => {
    try {
        const response = await getSlider();
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

const page = async () => {
    const sliderContent = await getSliderContent();

    return (
        <>
            <SliderIndex sliderContent={sliderContent} />
        </>
    );
};

export default page;
