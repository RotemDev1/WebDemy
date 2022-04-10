import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { addCourse } from "../../store/actions/courseActions";
import { useHistory } from "react-router";

export const CourseForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
    const [language, setLanguage] = useState("");
    const [mentor, setMentor] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const handleLanguage = (event) => {
        const value = event.target.value;
        setLanguage(value);
    };

    const handleMentor = (event) => {
        const value = event.target.value;
        setMentor(value);
    };

    const handleCategory = (event) => {
        const value = event.target.value;
        setCategory(value);
    };

    const handlePrice = (event) => {
        const value = event.target.value;
        setPrice(value);
    };

    const publishCourse = async () => {
        const course = {
            userId: loggedInUser._id,
            language: language,
            mentor: mentor,
            category: category,
            price: price,
        }
        await dispatch(addCourse(course));
        history.push(`/courses`)
    };
    return (
        <div className="addArticle">
            <div className="addArticleWrapper">
                <div className="topEditor">
                    <form action="" className="topArticleForm">
                        {/* <img src={loggedInUser.profilePicture} alt="" /> */}
                        <TextField
                            id="standard-read-only-input"
                            label="Author"
                            defaultValue={`${loggedInUser.username}`}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </form>
                    <form action="" className="textfield-language">
                        <TextField
                            fullWidth
                            id="standard-read-only-input LangugeInput"
                            label="language"
                            value={language}
                            onChange={handleLanguage}
                        />
                    </form>
                    <form action="" className="textfield-mentor">
                        <TextField
                            fullWidth
                            id="standard-read-only-input MentorInput"
                            label="mentor"
                            value={mentor}
                            onChange={handleMentor}
                        />
                    </form>
                    <form action="" className="textfield-price">
                        <TextField
                            fullWidth
                            id="standard-read-only-input MentorInput"
                            label="price"
                            value={price}
                            onChange={handlePrice}
                        />
                    </form>
                    <form action="" className="textfield-category">
                        <TextField
                            fullWidth
                            id="standard-read-only-input MentorInput"
                            label="category"
                            value={category}
                            onChange={handleCategory}
                        />
                    </form>
                </div>

                <button
                    className="btn-publise"
                    onClick={() => {
                        publishCourse();
                    }}
                >
                    Publise
                </button>
            </div>
        </div>
    );
};

{
    /* <FormControl fullWidth sx={{ m: 1 }}>
  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
  <OutlinedInput
    id="outlined-adornment-amount"
    value={values.amount}
    onChange={handleChange('amount')}
    startAdornment={<InputAdornment position="start">$</InputAdornment>}
    label="Amount"
  />
  </FormControl> */
}
export default CourseForm;
