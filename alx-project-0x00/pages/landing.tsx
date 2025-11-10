import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <div className="text-sm rounded-sm">
        <Button title="Get Started" />
      </div>
      <div className="text-md rounded-md">
        <Button title="Learn More" />
      </div>
      <div className="text-lg rounded-full">
        <Button title="Contact Us" />
      </div>

    </div>
  )
}
export default Landing