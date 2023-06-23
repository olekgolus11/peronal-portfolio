import AccordionContent from "./AccordionContent";

export default interface ProjectPaneContent {
  projectId: number;
  title: string;
  timespan?: string;
  description: AccordionContent[];
  photo: string;
}
