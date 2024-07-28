import React, { useState, useEffect } from "react";
import style from './Project.module.css';
import Box from '../Box/Box';
import Blankbox from '../Blankbox/Blankbox';
import Progressbar from "../Progressbar/Progressbar";

function Project({ tasks }) {
    const [slide, setSlide] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setItemsPerSlide(4);
            } else if (window.innerWidth > 800) {
                setItemsPerSlide(2);
            } else {
                setItemsPerSlide(1);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set the items per slide based on initial screen size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const prevSlide = () => {
        setSlide((prev) => (prev - itemsPerSlide + tasks.length) % tasks.length);
    };

    const nextSlide = () => {
        setSlide((prev) => (prev + itemsPerSlide) % tasks.length);
    };

    const renderSlides = () => {
        const totalTasks = tasks.length;
        const slides = [];

        for (let i = 0; i < itemsPerSlide; i++) {
            const index = (slide + i) % totalTasks;
            if (index < totalTasks) {
                slides.push(<Box key={tasks[index].id} task={tasks[index]} />);
            } else {
                slides.push(<Blankbox key={i} />);
            }
        }

        return slides;
    };

    return (
        <div>
            <div className={style.container}>
                {renderSlides()}
                <a className={style.prev} onClick={prevSlide}>&#10094;</a>
                <a className={style.next} onClick={nextSlide}>&#10095;</a>
            </div>
            <Progressbar />
        </div>
    );
}

export default Project;
