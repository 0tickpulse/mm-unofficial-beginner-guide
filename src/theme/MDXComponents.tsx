import FileTree from "@site/src/components/FileTree";
import Quiz from "@site/src/components/Quiz";
import QuizGrid from "@site/src/components/QuizGrid";
import ServerCmdGenerator from "@site/src/components/ServerCmdGenerator";
import PremiumOnly from "@site/src/components/annotations/PremiumOnly";
import MDXComponents from "@theme-original/MDXComponents";
import DropGenerator from "../components/DropGenerator";

export default {
    ...MDXComponents,
    FileTree,
    Quiz,
    QuizGrid,
    ServerCmdGenerator,
    PremiumOnly,
    DropGenerator,
};
