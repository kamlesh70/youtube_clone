import Button from "./Button";

const buttonList = ['All', 'Cricket', 'Javascript', 'Nest js', 'Node js', 'React js', 'MongoDB', 'Mongoose', 'Next js'];

function ButtonList() {
  return (
    <div className="flex">
        {buttonList.map((button, index) => {
            return <Button label={button} key={index}/>
        })}
    </div>
  )
}

export default ButtonList;