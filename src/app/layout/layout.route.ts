import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { CommunityFeedComponent } from "../community-feed/community-feed.component";
import { PersonalFeedComponent } from "../personal-feed/personal-feed.component";
import { ModelsComponent } from "../models/models.component";
import { PricingComponent } from "../pricing/pricing.component";
import { FaqComponent } from "../faq/faq.component";
import { ChangelogComponent } from "../changelog/changelog.component";
import { ContactComponent } from "../contact/contact.component";
import { NotificationsComponent } from "../notifications/notifications.component";
import { NotificationSingleComponent } from "../notification-single/notification-single.component";
import { UserSettingsComponent } from "../user-settings/user-settings.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { UserBillingComponent } from "../user-billing/user-billing.component";
import { IndexTwoComponent } from "../index-two/index-two.component";
import { AiChatBotComponent } from "../ai-chat-bot/ai-chat-bot.component";
import { ImageGenerationComponent } from "../image-generation/image-generation.component";
import { DocumentationComponent } from "../documentation/documentation.component";
import { SignInComponent } from "../sign-in/sign-in.component";

export const ADMIN_ROUTES: Routes = [
  {path: 'sign-in', component: SignInComponent},
  { path: '', component: HomeComponent },
  // { path: 'community_feed', component: CommunityFeedComponent },
  { path: 'personal_feed', component: PersonalFeedComponent },
  // { path: 'models', component: ModelsComponent },
  // { path: 'pricing', component: PricingComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'changelog', component: ChangelogComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'notifications', component: NotificationsComponent },
  // { path: 'notification-single', component: NotificationSingleComponent },
  // { path: 'user-billing', component: UserBillingComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'user-settings', component: UserSettingsComponent },
  // { path: 'index-two', component: IndexTwoComponent },
  { path: 'aichatbot', component: AiChatBotComponent },
  // { path: 'image_generation', component: ImageGenerationComponent },
  // { path: 'documentation', component: DocumentationComponent },
]
