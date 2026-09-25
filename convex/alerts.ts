import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

<<<<<<< HEAD
=======
// Create an alert
>>>>>>> origin/feature/phase-2-database
export const createAlert = mutation({
  args: {
    title: v.string(),
    message: v.string(),
<<<<<<< HEAD
    type: v.string(),
    priority: v.string(),
=======
    type: v.union(
      v.literal("email"),
      v.literal("whatsapp"),
      v.literal("system"),
      v.literal("calendar")
    ),
    priority: v.union(
      v.literal("high"),
      v.literal("medium"),
      v.literal("low")
    ),
>>>>>>> origin/feature/phase-2-database
    data: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => 
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    const alertId = await ctx.db.insert("alerts", {
      userId: user._id,
<<<<<<< HEAD
      title: args.title,
      message: args.message,
      type: args.type,
      priority: args.priority,
      data: args.data,
=======
      ...args,
>>>>>>> origin/feature/phase-2-database
      isRead: false,
      isDismissed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return alertId;
  },
});

<<<<<<< HEAD
// FIXED: Return empty array instead of throwing error
=======
// Get user alerts
>>>>>>> origin/feature/phase-2-database
export const getAlerts = query({
  args: {
    limit: v.optional(v.number()),
    unreadOnly: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
<<<<<<< HEAD
      return [];
=======
      throw new Error("Unauthorized");
>>>>>>> origin/feature/phase-2-database
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => 
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    if (!user) {
<<<<<<< HEAD
      return [];
    }

    let alerts = await ctx.db
      .query("alerts")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();

    if (args.unreadOnly) {
      alerts = alerts.filter(alert => !alert.isRead);
    }

    return alerts.slice(0, args.limit || 50);
  },
});

=======
      throw new Error("User not found");
    }

    let queryBuilder = ctx.db
      .query("alerts")
      .withIndex("by_user", (q) => q.eq("userId", user._id));

    if (args.unreadOnly) {
      queryBuilder = queryBuilder.filter((q) => q.eq(q.field("isRead"), false));
    }

    const alerts = await queryBuilder
      .order("desc")
      .take(args.limit || 50);

    return alerts;
  },
});

// Mark alert as read
>>>>>>> origin/feature/phase-2-database
export const markAlertAsRead = mutation({
  args: {
    alertId: v.id("alerts"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

<<<<<<< HEAD
=======
    const alert = await ctx.db.get(args.alertId);
    if (!alert) {
      throw new Error("Alert not found");
    }

>>>>>>> origin/feature/phase-2-database
    await ctx.db.patch(args.alertId, {
      isRead: true,
      updatedAt: Date.now(),
    });
  },
});

<<<<<<< HEAD
=======
// Dismiss alert
>>>>>>> origin/feature/phase-2-database
export const dismissAlert = mutation({
  args: {
    alertId: v.id("alerts"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

<<<<<<< HEAD
=======
    const alert = await ctx.db.get(args.alertId);
    if (!alert) {
      throw new Error("Alert not found");
    }

>>>>>>> origin/feature/phase-2-database
    await ctx.db.patch(args.alertId, {
      isDismissed: true,
      updatedAt: Date.now(),
    });
  },
});