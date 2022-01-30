const { Blog } = require("../models");

const blogdata = [
  {
    user_id: 2,
    created_date: "2024-06-23",
    title: "GPT-3: The First Artificial General Intelligence?",
    content: "If you had asked me a year or two ago when Artificial General Intelligence (AGI) would be invented, I’d have told you that we were a long way off. I wasn’t alone in that judgment. Most experts were saying that AGI was decades away, and some were saying it might not happen at all. The consensus is — was? — that all the recent progress in AI concerns so-called “narrow AI,” meaning systems that can only perform one specific task. An AGI, or a “strong AI,” which could perform any task as well as a human being, is a much harder problem. It is so hard that there isn’t a clear roadmap for achieving it, and few researchers are openly working on the topic. GPT-3 is the first model to shake that status-quo seriously.GPT-3 is the latest language model from the OpenAI team. They published the paper in May 2020, and in July, OpenAI gave access to the model to a few beta testers via an API. The model has been used to generate poetry (see one of my attempts below), write role-playing adventures, or create simple apps with a few buttons. If you’ve followed machine learning progresses in recent years, you’d know that all of that could be done before by other AI systems, so what’s different about GPT-3?",
  },
  {
    user_id: 1,
    created_date: "2024-06-23",
    title: "What is TypeScript?",
    content: "TypeScript is a modern age JavaScript development language. It is a statically compiled language to write clear and simple JavaScript code. It can be run on Node js or any browser which supports ECMAScript 3 or newer versions. TypeScript provides optional static typing, classes, and interface. For a large JavaScript project adopting Typescript can bring you more robust software and easily deployable with a regular JavaScript application.",
  },
  {
    user_id: 3,
    created_date: "2024-06-23",
    title: "Flutter vs. React Native – What to Choose in 2022?",
    content: "Flutter and React Native share a lot of similarities, but they are also quite different in a handful of key ways. For starters Flutter uses the Dart programming language in its codebase whereas React Native uses JSX, which stands for JavaScript XML. Both languages are based on the C-style type of syntax and follow object-orientated principles. This common ground it means that Flutter and React Native are fundamentally alike in terms of design and the code is very similar as well.",
  },
];

const seedBlog = async () => await Blog.bulkCreate(blogdata);

module.exports = seedBlog;
