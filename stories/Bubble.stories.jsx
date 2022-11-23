import Bubble from "../components/Card/Bubble";

export default {
    title: "Components/Bubble",
    component: Bubble,
};

const Template = (args) => <Bubble {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    img: "https://i.pinimg.com/originals/c8/c2/ba/c8c2baff7972c012360cfb5943f1020a.jpg",
    content: "Tell Me About Yourself",
    name: "Community Name",
    theme: "",
};
