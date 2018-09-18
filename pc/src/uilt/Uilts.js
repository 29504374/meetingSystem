
export default
{
    justifyContent(value)
    {
        let name ="";
        if(value.length == 2)
        {
            name = value.charAt(0)+"　"+value.charAt(1);
        }else
        {
            name = value;
        }
        return name;
    }
}