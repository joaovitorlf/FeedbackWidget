import { FeedbacksRepository } from "../repositories/feedbacks-repository"

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;    
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) {}
    
    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo FeedBack',
            body: [
                    `<div style="font-family: sans-serify; font-size: 16px; color: #111;"`,
                    `<p>Tipo do Feedback: ${type}</p>`,
                    `<p>Comentário: ${comment}</p>`,     
                    `</div>`
                ].join('\n')
        })
    }    
}