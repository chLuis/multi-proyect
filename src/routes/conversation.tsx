import Conversation from "../components/Conversation";
import { TRANSCRIPTION_CONVERSATION } from "../../lib/conversation";
import TitleProyect from "../components/TitleProyect";

export default function ConversationPage() {


  return (
    <div className="flex min-h-screen flex-col items-center justify-between animate-showSlow pb-12">
      <TitleProyect title={"Transcription"} />
      <Conversation data={TRANSCRIPTION_CONVERSATION}/>
    </div>
  );
}
