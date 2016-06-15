MienaSlider = React.createClass({
    componentDidMount(){
        $(this.refs.miena_slider).slick({
            autoplay: true
        });
    },
    render(){
        return (
            <div className="miena_slider" ref="miena_slider">
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_000.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_001.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_002.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_003.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_004.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_005.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_006.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_007.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_008.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_009.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_010.jpg" alt=""/></div>
                <div><img className="thumb-image" src="/images/miena_slider/miena_yoo_slider_011.jpg" alt=""/></div>
            </div>
        )

    }
});

MyStory = React.createClass({
    componentWillMount(){
        Actions.setLayout('page');
    },

    render(){
        return <div className="main-content-wrapper my-story">
            <h1 className="text-align-center">My Story</h1>
            <MienaSlider />
            <br/>
            <br/>
            <p id="intro" className="text-align-center">
                Miena Yoo was born and grew up in a small town called Samga, in South Korea. Samga was surrounded by
                beautiful mountains and a river, the Yangcheon, where she used to swim in the summer and skate in the winter.
                Miena's dad, Seong Bang Yoo, was a veterinarian, and she accompanied him, going from farm to farm curing sick animals.
                Her mother, Kee Hee Che, was an assistant nurse at Miena's dad's clinic, and she was active in her hometown church choir.
                Miena also used to sing with her mother in the church children's group.
            </p>
            <p className="text-align-center">
                In August 2006 Miena was a featured artist in the Spark episode, "Steppin' Out" on KQED Public Television.
                Miena's 2nd CD, "A Little Stone on the Sidewalk" is selected for WomensRadio’s “Best of the 2000’s"(www.womensRadio.com)
                end-of-the-decade feature!. And Since 2006, Miena has been a featured musician enriching the cultural mix for Bread  Roses,
                a nonprofit organization, at venues throughout the Bay Area.
            </p>
            <p className="text-align-center">
                Miena immigrated to the United States from South Korea in
                1992, and now she creates music that mixes Korean language phrases and imagery with English. In 2006, Miena released her
                1st album " At the River Again " , and in 2008, her 2nd album "A Little Stone On the Sidewalk". Miena's songs are inspired by
                her childhood, family members, and the forests, river, and wildlife of her Korean home. Her folk-driven sound carries influences
                from American songstresses Tracy Chapman and Lucinda Williams.
            </p >
            <p className="text-align-center">
                In the midst of a busy playing schedule and work on her new album, Miena remains focused on giving back to the surrounding community;
                veteran's hospitals, elderly centers and the UCSF Cancer Center. She shows that individuals still care for people who often feel forgotten
                and alone. Miena donates all proceeds from her 1st album to stray animal rescue efforts.
            </p>
            <p className="text-align-center">
            Please pick up copies of her CDs, "At the River Again" and "A Little Stone On the Sidewalk",
            and listen to her distinctive soulful voice that conveys deep emotion and moves people's hearts.
            </p>

            <p className="text-align-center">
                Thank you.
            </p>
            <audio autoPlay>
                <source src="music/crickets_night.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </source>
            </audio>
        </div>
    }
});