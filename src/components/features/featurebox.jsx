import { useState } from 'react'
import Accordion from './Accordion';
import { useGetData } from '../../hooks/useGetData';

const FeatureBox = () => {
    const { data, loading, error } = useGetData();
    const [toggleMain, setToggleMain] = useState(false);

    const toggleVisibility = () => {
        setToggleMain(!toggleMain);
    }

    const handleToggleNow = (id, visible) => {

        const content = document.getElementById(visible);
        if (content) {
            if (content.classList.contains('max-h-0')) {
                content.classList.remove('max-h-0');
                content.classList.add('max-h-full');

            } else {
                content.classList.remove('max-h-full');
                content.classList.add('max-h-0');
            }
        } else {
            console.error(`Element with ID "${visible}" not found`);
        }
    }

    return (
        <>
            <div className='container'>
                <div className='grid grid-cols-2'>
                    {!loading && !error ? (
                        data.map((curElem) => (
                            <Accordion
                                key={curElem.id}
                                curElem={curElem}
                                handleToggleNow={handleToggleNow}
                            />
                        ))
                    ) : (
                        <div>
                            {loading ? <p>Loading...</p> : <p>Error occurred while fetching data.</p>}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FeatureBox

