import { BulkDeletionBodyTypes, EditRecipientBodyTypes, ListRecipientQueryType } from "../routes/recipients";
import { BulkDeleteResponse, ListRecipientResponse } from "../services/recipient";
import { CreateEditRecepient } from "./createEditRecipientBody";

export interface Service {
    create(payload: CreateEditRecepient): Promise<Recipient>;
    list(filter: ListRecipientQueryType): Promise<ListRecipientResponse>;
    edit(payload: EditRecipientBodyTypes): Promise<Recipient>;
    delete(payload: DeleteRecipientParamTypes): Promise<void>;
    bulkDelete(payload: BulkDeletionBodyTypes): Promise<BulkDeleteResponse>
}